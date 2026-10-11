import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Khai báo kiểu dữ liệu phim theo đề bài (Câu 3)
export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  rating: number;
  poster: string;
  watched: boolean;
}

// Khai báo props truyền vào (Câu 3, 4)
export interface MovieCardProps {
  movie: Movie;
  layout?: 'row' | 'poster';
  onSelect: (id: string) => void;
}

function MovieCardComponent({ movie, layout = 'row', onSelect }: MovieCardProps) {
  // Ép kiểu an toàn để tránh lỗi undefined khi gọi toFixed (Câu 3)
  let score = "0.0";

// Nếu có movie và có trường rating
if (movie && movie.rating) {
  score = movie.rating.toFixed(1); // Làm tròn 1 chữ số thập phân
}

  // --- DẠNG POSTER (Câu 4) ---
  if (layout === 'poster') {
    return (
      <TouchableOpacity 
        style={styles.posterCard} 
        onPress={() => onSelect(movie.id)}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: movie.poster }} style={styles.posterImage} />
          {/* Huy hiệu điểm ở góc trên phải */}
          <View style={styles.badgeRating}>
            <Text style={styles.badgeText}>⭐ {score}</Text>
          </View>
          {/* Chip đã xem ở góc dưới trái (chỉ hiện khi watched = true) */}
          {movie.watched && (
            <View style={styles.chipWatched}>
              <Text style={styles.chipText}>✓ Đã xem</Text>
            </View>
          )}
        </View>
        <Text style={styles.posterTitle} numberOfLines={1}>{movie.title}</Text>
      </TouchableOpacity>
    );
  }

  // --- DẠNG ROW MẶC ĐỊNH (Câu 3, 4) ---
  return (
    <TouchableOpacity 
      style={styles.rowCard} 
      onPress={() => onSelect(movie.id)}
    >
      <Image source={{ uri: movie.poster }} style={styles.rowImage} />
      <View style={styles.rowInfo}>
        <Text style={styles.rowTitle}>{movie.title}</Text>
        <Text style={styles.rowSubtitle}>{movie.director} · {movie.year}</Text>
        <Text style={styles.rowRating}>⭐ {score}</Text>
        <Text>{movie.watched ? '✅ Đã xem' : '🎬 Chưa xem'}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Bọc bằng React.memo theo yêu cầu (Câu 3)
export const MovieCard = React.memo(MovieCardComponent);

const styles = StyleSheet.create({
  // CSS cho dạng Row
  rowCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  rowImage: {
    width: 70,
    height: 105,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  rowInfo: {
    flex: 1,
    marginLeft: 12,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rowSubtitle: {
    color: '#666',
    marginBottom: 4,
  },
  rowRating: {
    marginBottom: 4,
  },

  // CSS cho dạng Poster (2 cột)
  posterCard: {
    flex: 1,
    margin: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingBottom: 6,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 2 / 3, // Tỉ lệ 2:3 chuẩn poster
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#ddd',
  },
  posterImage: {
    width: '100%',
    height: '100%',
  },
  badgeRating: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  chipWatched: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    backgroundColor: '#16a34a',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  chipText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  posterTitle: {
    fontWeight: 'bold',
    marginTop: 6,
    paddingHorizontal: 4,
  },
});