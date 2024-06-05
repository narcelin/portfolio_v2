import MyButton from "../MyButton";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="py-10 flex flex-row justify-between">
      <div className="flex flex-row gap-5">
        <FaGithub size={20} />
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
      </div>
      <div className="flex flex-row gap-5">
        <ul>Quick Nav: </ul>
        <ul>
          <MyButton suttle> Home </MyButton>
        </ul>
        <ul>
          <MyButton suttle> About </MyButton>
        </ul>
        <ul>
          <MyButton suttle> Works </MyButton>
        </ul>
        <ul>
          <MyButton suttle> Services </MyButton>
        </ul>
        <ul>
          <MyButton suttle> Contact </MyButton>
        </ul>
      </div>
    </section>
  );
}
