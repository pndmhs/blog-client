import PostItem from "./PostItem";

const posts = [
  {
    title: "Unveiling the Wonders of Astrophotography: A Beginner's Guide",
    text: "Astrophotography opens a portal to the vast and awe-inspiring cosmos, allowing us to capture the beauty of distant galaxies and celestial bodies. To embark on this journey, start by investing in a sturdy tripod and a DSLR or mirrorless camera with manual settings. Understanding the importance of location and timing is crucial; choose a dark sky area, away from city lights, and shoot during the new moon phase for optimal conditions.",
    date: "11 Feb, 2024",
  },
  {
    title: "The Art of Mindful Eating: Nourishing Your Body and Soul",
    text: "Mindful eating is not just a trend; it's a holistic approach to nourishing your body and soul. Begin by slowing down and paying full attention to the sensory experience of eating. Engage your senses by appreciating the colors, textures, and aromas of your food. Chew slowly, savoring each bite, and be mindful of how different flavors unfold.",
    date: "13 Feb, 2024",
  },
  {
    title: "Exploring the Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    text: "For those seeking a travel adventure beyond the ordinary, hidden gems around the world offer a chance to immerse yourself in authentic and lesser-explored destinations. Consider the enchanting beauty of Chefchaouen in Morocco, a blue-painted town nestled in the Rif Mountains, or the historic charm of Matera in Italy, known for its ancient cave dwellings.",
    date: "15 Feb, 2024",
  },
];

const PostsList = () => {
  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto">
        <h2 className="text-4xl font-semibold mt-8">Posts</h2>
        <p className="text-yellow-900 mb-6">3 Posts</p>
        <div className="flex flex-col gap-8">
          {posts.map((post, index) => (
            <PostItem
              key={index}
              title={post.title}
              text={post.text}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PostsList;
