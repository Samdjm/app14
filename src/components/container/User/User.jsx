import FullName from "../../ui/FullName/FullName";
import Hobbies from "../../ui/Hobbies/Hobbies";

export default function User(proprités) {
  return (
    <div style={{ backgroundColor: "rgb(50, 50 ,55)", padding: "20px" }}>
      <FullName
        lastName={proprités.user.nom}
        firstName={proprités.user.prenom}
      />
      <Hobbies cours={proprités.user.cours} />
    </div>
  );
}
