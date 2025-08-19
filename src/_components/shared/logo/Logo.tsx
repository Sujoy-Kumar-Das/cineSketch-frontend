import logoImage from "@/assets/icons/log.png";
import Image from "next/image";
export default function Logo() {
  return <Image height={50} width={180} src={logoImage} alt="logo" priority />;
}
