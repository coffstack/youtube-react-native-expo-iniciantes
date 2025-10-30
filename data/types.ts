export type City = {
  id: string;
  name: string;
  country: string;
  coverImage: number;
  description: string;
  touristAttractions: TouristAttraction[];
  location: {
    latitude: number;
    longitude: number;
  };
  categories: Category[];
  relatedCitiesIds: string[];
};

export type TouristAttraction = {
  id: string;
  name: string;
  description: string;
  cityId: string;
};

export type Category = {
  id: string;
  name: string;
  description: string | null;
  code: CategoryCode;
};

export type CategoryCode =
  | "ADVENTURE"
  | "BEACH"
  | "CULTURE"
  | "GASTRONOMY"
  | "HISTORY"
  | "LUXURY"
  | "NATURE"
  | "SHOPPING"
  | "URBAN"
  | "FAVORITE";
