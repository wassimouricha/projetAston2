import { ImageSourcePropType } from "react-native";

export interface FriendsProfile {
  id?: number;
  photo?: ImageSourcePropType;
  nom?: string;
  prenom?: string;
  description?: string;
  mail?: string;
  age?: string;
  pays?: string;
  statut?: string;
}

export const Friends = [

    {
      id: 2,
      photo: require("../../assets/images/dede.jpg") as ImageSourcePropType ,
      nom: "Didier",
      prenom: "Deschamps",
      description: "Grande légende du football",
      mail: "dédé@gmail.com",
      age: "60 ans",
      pays: "France",
      statut: "Légende",
    },
    {
      id: 3,
      photo: require("../../assets/images/tre.jpg") as ImageSourcePropType ,
      nom: "Trezeguet",
      prenom: "David",
      description: "Grande légende du football",
      mail: "david@gmail.com",
      age: "50 ans",
      pays: "France",
      statut: "Légende",
    },
    {
      id: 4,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 5,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 6,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 7,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 8,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 9,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 10,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },
    {
      id: 11,
      photo: require("../../assets/images/sam.jpg") as ImageSourcePropType ,
      nom: "Jackson",
      prenom: "Samuel L.",
      description: "Grande légende du football",
      mail: "sam@gmail.com",
      age: "70 ans",
      pays: "USA",
      statut: "Grand acteur",
    },

  ]
 