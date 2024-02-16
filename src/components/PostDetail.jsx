const text = `Astrophotography opens a portal to the vast and awe-inspiring cosmos, allowing us to capture the beauty of distant galaxies and celestial bodies. To embark on this journey, start by investing in a sturdy tripod and a DSLR or mirrorless camera with manual settings. Understanding the importance of location and timing is crucial; choose a dark sky area, away from city lights, and shoot during the new moon phase for optimal conditions.

Additionally, familiarize yourself with the basic principles of astrophotography, such as long exposure techniques and aperture settings, to capture the faint light emitted by distant stars and nebulae. Patience is key in astrophotography, as capturing stunning celestial images often requires long exposure times, sometimes lasting several minutes. During these extended exposures, it's essential to minimize any vibrations or movement, so using a remote shutter release or the camera's built-in timer can help ensure sharp and clear images.

Moreover, consider investing in a light pollution filter to reduce the impact of urban or artificial lights, enhancing the contrast and clarity of your astrophotos. Planning your shots in advance by using astronomy apps or websites can assist in identifying noteworthy celestial events, like meteor showers or planetary alignments, providing unique opportunities for captivating compositions.

Experiment with different focal lengths and framing to create diverse and visually striking images. Astrophotography offers endless possibilities for creativity, whether you're capturing the detailed surface of the moon, the colorful hues of a distant nebula, or the mesmerizing trails of stars during a long exposure. As you delve deeper into this mesmerizing realm, you'll find that astrophotography not only requires technical knowledge but also encourages a profound connection with the vastness of the universe. So, set your sights on the night sky, embrace the challenges, and let your imagination soar through the cosmos.`;

const PostDetail = () => {
  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto py-8">
        <h2 className="font-semibold text-3xl mb-2">
          Unveiling the Wonders of Astrophotography: A Beginner's Guide
        </h2>
        <p className="text-yellow-900">11 Feb, 2024</p>
        <div className="mt-8 flex flex-col gap-6 font-merriweather">
          {text
            .split("\n")
            .filter((par) => par !== "")
            .map((par, index) => (
              <p key={index}>{par}</p>
            ))}
        </div>
      </div>
    </main>
  );
};

export default PostDetail;
