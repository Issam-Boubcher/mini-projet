import { Admin, User } from "@prisma/client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type UserType = User | Admin | Partial<Admin> | Partial<User>;

export const userState = atom<UserType>({
  key: "userState",
  default: {
    id: 0,
    email: "",
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});
