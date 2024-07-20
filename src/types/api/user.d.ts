interface Role {
  id: number;
  code: string;
  name: string;
}

interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  countryCode: string;
  createdDt: string;
  bio: string | null;
  avatar: string | null;
  city: string | null;
  state: string | null;
  address1: string | null;
  address2: string | null;
  socialGoogleId: string | null;
  role: Role;
}
