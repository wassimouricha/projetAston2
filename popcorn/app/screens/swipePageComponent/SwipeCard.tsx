import { View, StyleSheet, Image, Text } from "react-native"

interface SwipeCardProps {
    card: {
        poster_path: string,
        title: string,
        vote_average: number
    }
}

export const SwipeCard: React.FC<SwipeCardProps> = ({ card }) => (
    <View style={styles.card}>
        <Image source={{ uri: 'https://image.tmdb.org/t/p/w500'+card.poster_path }} style={styles.cardImage} />
        <Text style={styles.titre}>{card.title}</Text>
        <Text style={styles.vote_average}>Note moyenne: {card.vote_average}</Text>
    </View>
)

const styles = StyleSheet.create({
    card: {
        flex: 0.80,
        shadowRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        textAlign: 'center'
    },
    cardImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
        flex: 1,
        resizeMode: 'contain'
    },
    titre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    vote_average: {
        fontSize: 16,
        color: '#ff9900'
    }
});