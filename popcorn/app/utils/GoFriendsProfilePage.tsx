import { Friends } from "../data/friendsData"; // Importez le tableau Friends
import { FriendsProfilePageScreenProps } from "../screens/FriendsProfilePage"; // Importez les types de la page de profil d'ami

export function handleNavigateToFriendsProfile(
  props: FriendsProfilePageScreenProps, // Utilisez les types appropriés ici
  friendId: number
) {
  const friend = Friends.find((friend) => friend.id === friendId);
  if (friend) {
    const friendParams = {
      id: friend.id,
      photo: friend.photo,
      nom: friend.nom,
      prenom: friend.prenom,
      description: friend.description,
      mail: friend.mail,
      age: friend.age, // Pas besoin de conversion car le type est déjà 'string'
      pays: friend.pays,
      statut: friend.statut,
    };

    props.navigation.navigate("FriendsProfilePage", { friend: friendParams }); // Utilisez { friend: friendParams }
  }
}
