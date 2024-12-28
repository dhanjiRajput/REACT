import ProfileCard from "./ProfileCard";
const App = () => {
  const data = [
    {
      id: 0,
      name: "John Doe",
      age: 30,
      location: "New York, USA",
      bio: "I'm a software engineer with a passion for creating user-friendly experiences.",
      profile:
        "https://cdn.prod.website-files.com/62a34fe8356b0387e6afbcf9/62a34fe8356b03419fafc039_MC3_John-Wharton.png",
    },
    {
      id: 1,
      name: "John Doe",
      age: 30,
      location: "New York, USA",
      bio: "I'm a software engineer with a passion for creating user-friendly experiences.",
      profile:
        "https://www.maravai.com/wp-content/uploads/2023/09/John-Deford-600x600.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      location: "San Francisco, USA",
      bio: "A creative designer who loves turning ideas into visually stunning designs.",
      profile:
        "https://www.lazard.com/media/t0bdwkue/goldasich-john-1200x1200.png?width=768&height=768&upscale=false",
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 35,
      location: "Seattle, USA",
      bio: "Marketing strategist with a knack for driving brand growth and engagement.",
      profile:
        "https://www.allegion.com/content/dam/allegion-corp/migration/leadership/John%20Stone%20-%20image%202.png",
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 40,
      location: "Austin, USA",
      bio: "Tech entrepreneur and mentor helping startups achieve their dreams.",
      profile:
        "https://www.bennettjones.com/-/media/Images/BennettJones/People/Baird_John.png",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.map((user, index) => (
          <ProfileCard
            name={user.name}
            age={user.age}
            location={user.location}
            bio={user.bio}
            profile={user.profile}
          />
        ))}
      </div>
    </>
  );
};
export default App;
