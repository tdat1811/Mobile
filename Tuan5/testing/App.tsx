
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Switch,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { Movie, MovieCard } from './components/MovieCard';

// Link API MockAPI
export const API_URL =
  'https://6acaffef3115bcc9582121f1.mockapi.io/movies';

// Hàm gọi API lấy danh sách phim
export async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error('Gọi API thất bại: ' + res.status);
  }

  return res.json();
}

export default function App() {
  // Dữ liệu và trạng thái tải
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Trạng thái của 2 công tắc
  const [isPosterMode, setIsPosterMode] = useState<boolean>(false);
  const [filterUnwatched, setFilterUnwatched] =
    useState<boolean>(false);

  // Hàm tải danh sách phim từ API
  const loadMovies = useCallback(async () => {
    try {
      setError(null);

      // Gọi API để lấy lại toàn bộ danh sách
      const data = await fetchMovies();

      // Cập nhật danh sách phim
      setMovies(data);
    } catch (err) {
      setError('Không tải được danh sách phim.');
    } finally {
      // Tắt trạng thái tải sau khi hoàn tất
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Tự động tải phim khi mở ứng dụng
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // Kéo xuống để tải lại toàn bộ danh sách phim
 
  // Refresh: tải lại danh sách và reset các bộ lọc
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Tắt bộ lọc và đưa giao diện về trạng thái mặc định
    setFilterUnwatched(false);
    setIsPosterMode(false);

    // Tải lại toàn bộ danh sách phim từ API
    loadMovies();
  }, [loadMovies]);

  // Khi chọn phim, hiển thị thông tin
  const handleSelect = useCallback(
    (id: string) => {
      const selected = movies.find(
        (item) => item.id === id
      );

      if (selected) {
        Alert.alert(
          selected.title,
          `Đạo diễn: ${selected.director}`
        );
      }
    },
    [movies]
  );

  // Lọc phim chưa xem
  const filteredMovies = useMemo(() => {
    if (filterUnwatched) {
      return movies.filter((movie) => !movie.watched);
    }

    return movies;
  }, [movies, filterUnwatched]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Tiêu đề ứng dụng */}
        <Text style={styles.header}>
          Movie Watchlist
        </Text>

        {/* Hai công tắc chức năng */}
        <View style={styles.switchRow}>
          <View style={styles.switchItem}>
            <Text>Dạng poster</Text>

            <Switch
              value={isPosterMode}
              onValueChange={setIsPosterMode}
            />
          </View>

          <View style={styles.switchItem}>
            <Text>Chưa xem</Text>

            <Switch
              value={filterUnwatched}
              onValueChange={setFilterUnwatched}
            />
          </View>
        </View>

        {/* Trạng thái tải dữ liệu */}
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator
              size="large"
              color="#0066cc"
            />
          </View>
        ) : error ? (
          /* Hiển thị lỗi và nút thử lại */
          <View style={styles.center}>
            <Text style={styles.errorText}>
              {error}
            </Text>

            <TouchableOpacity
              style={styles.retryBtn}
              onPress={() => {
                setLoading(true);
                loadMovies();
              }}
            >
              <Text style={styles.retryText}>
                Thử lại
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Danh sách phim */
          <FlatList<Movie>
            key={isPosterMode ? 'grid-2' : 'list-1'}
            data={filteredMovies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={isPosterMode ? 2 : 1}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                layout={isPosterMode ? 'poster' : 'row'}
                onSelect={handleSelect}
              />
            )}
            // Kéo xuống để tải lại toàn bộ danh sách
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#0066cc']}
                tintColor="#0066cc"
              />
            }
            // Hiển thị khi danh sách rỗng
            ListEmptyComponent={
              <View style={styles.center}>
                <Text style={styles.emptyText}>
                  Không có phim nào để hiển thị.
                </Text>
              </View>
            }
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginVertical: 10,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 12,
  },

  retryBtn: {
    backgroundColor: '#0066cc',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },

  retryText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  emptyText: {
    color: '#888',
    fontSize: 15,
  },
});
