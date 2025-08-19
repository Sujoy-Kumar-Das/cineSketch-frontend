export interface IUserAddress {
  street: string;
  postalCode: number;
  city: string;
  country: string;
}

export interface ISubscription {
  plan: "free" | "monthly" | "yearly";
  start: Date | undefined;
  end: Date | undefined;
}

export interface IUser {
  name: string;
  image: string;
  address?: IUserAddress | undefined;
  subscription?: ISubscription | undefined;
  email: string;
  role: "user" | "moderator" | "admin" | "superAdmin";
  isVerified: boolean;
  accessToken?: string;
  refreshToken?: string;
}
