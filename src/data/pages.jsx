import cover from '../assets/illustrations/cover.png';
import dedication from '../assets/illustrations/dedication.png';
import bonus from '../assets/illustrations/bonus.png';
import banshees from '../assets/illustrations/banshees.png';
import zombies1 from '../assets/illustrations/zombies1.png';
import witch1 from '../assets/illustrations/witch1.png';
import skeletons1 from '../assets/illustrations/skeletons1.png';
import ghosts from '../assets/illustrations/ghosts.png';
import jiving from '../assets/illustrations/jiving.png';
import goblins from '../assets/illustrations/goblins.png';
import storm2 from '../assets/illustrations/storm2.png';
import vampires from '../assets/illustrations/vampires.png';
import ending from '../assets/illustrations/ending.png';
import werewolves from '../assets/illustrations/werewolves.png';
import dancing1 from '../assets/illustrations/dancing1.png';
import gettingtired from '../assets/illustrations/gettingtired.png';
import readyforbed from '../assets/illustrations/readyforbed.png';
import sleepingMonsters from '../assets/illustrations/sleepingMonsters.png';
import bonus3 from '../assets/illustrations/bonus3.png';
import zombies2 from '../assets/illustrations/zombies2.png';
import witch2 from '../assets/illustrations/witch2.png';
import skeletons2 from '../assets/illustrations/skeletons2.png';
import dancingghosts from '../assets/illustrations/dancingghosts.png';
import jiving2 from '../assets/illustrations/jiving2.png';
import goblinsscary from '../assets/illustrations/goblinsscary.png';
import storm from '../assets/illustrations/storm.png';
import cake3 from '../assets/illustrations/cake3.png';
import werewolves2 from '../assets/illustrations/werewolves2.png';
import party from '../assets/illustrations/party.png';
import happy from '../assets/illustrations/happy.png';
import sleeping from '../assets/illustrations/sleeping.png';

export const pages = [
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-4xl font-annie-use-your-telescope text-gray-800 relative">
        <h1 className="text-4xl">The Monster's Halloween Party</h1>
        <p className="absolute bottom-4 right-4 italic text-2xl">By: Page Hill</p>
      </div>
    ),
    image: cover,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <h1 className="text-4xl">The Monster's Halloween Party</h1>
        <p className="mt-4 italic text-2xl">To my baby niece! I love you so much!</p>
        <p className="mt-8 border-b-2 border-gray-400 w-1/2 mx-auto"></p>
      </div>
    ),
    image: dedication,
  },
  // Blank page before dedication
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: bonus3,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <h1 className="text-4xl">The Monster's Halloween Party</h1>
        <p className="mt-4 italic text-2xl leading-loose">
          The bats come out!<br />
          The cats come out!<br />
          The pumpkins come out, too.<br />
          The ghosts come out.<br />
          It's Halloween!<br />
          BOO!<br />
          -unknown
        </p>
      </div>
    ),
    image: bonus,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's Midnight! It's Halloween!</p>
        <p className="text-3xl mt-2">The banshee is so excited-</p>
        <p className="text-4xl font-bold mt-2">HE SCREAMS</p>
      </div>
    ),
    image: banshees,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's 1!</p>
        <p className="text-3xl mt-2">The zombies climb from the dirt for fun!</p>
      </div>
    ),
    image: zombies1,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: zombies2,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's 2!</p>
        <p className="text-3xl mt-2">The witches bring a pot of bubbling brew!</p>
      </div>
    ),
    image: witch1,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: witch2,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">The skeletons play music on their knees!</p>
      </div>
    ),
    image: skeletons1,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: skeletons2,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">The ghosts glide to the dance floor.</p>
      </div>
    ),
    image: ghosts,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: dancingghosts,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">The monsters start to jive!</p>
      </div>
    ),
    image: jiving,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: jiving2,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's 6!</p>
        <p className="text-3xl mt-2">The goblins play a trick!</p>
      </div>
    ),
    image: goblins,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: goblinsscary,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's 7!</p>
        <p className="text-3xl mt-2">Thunder crashes from the Heavens!</p>
      </div>
    ),
    image: storm2,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: storm,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">The vampires cut the cobweb cake!</p>
        <p className="text-3xl mt-2">"Gooey red velvet, my favorite!"</p>
      </div>
    ),
    image: vampires,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: cake3,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's 9!</p>
        <p className="text-3xl mt-2">The werewolves are ready to dine!</p>
        <p className="text-3xl mt-2">"Hello, 9.927 bug pizzas and 11.883 jugs of pumpkin juice please!"</p>
      </div>
    ),
    image: werewolves,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: werewolves2,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">The monsters want to dance again!</p>
      </div>
    ),
    image: dancing1,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: party,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <h1 className="text-5xl font-bold">HAPPY HALLOWEEN</h1>
      </div>
    ),
    image: ending,
  },
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: happy,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">"Is anyone else getting sleepy?"</p>
      </div>
    ),
    image: gettingtired,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">It's the Afternoon!</p>
        <p className="text-3xl mt-2">The monsters fall asleep so soon!</p>
      </div>
    ),
    image: readyforbed,
  },
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope">
        <p className="text-3xl">Goodnight Monsters!</p>
        <p className="text-4xl font-bold mt-2">Happy Halloween!</p>
      </div>
    ),
    image: sleepingMonsters,
  },
  // Blank page before back cover
  {
    content: (
      <div className="w-full h-full flex items-center justify-center text-center text-gray-800 font-annie-use-your-telescope text-2xl">
        {/* Empty content for blank page */}
      </div>
    ),
    image: sleeping,
  },
  // Back cover page
  {
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-gray-800 font-annie-use-your-telescope p-6">
        <h1 className="text-4xl font-bold mb-4">A Spooky Celebration Awaits!</h1>
        <p className="text-xl leading-loose mb-6">
          It’s Halloween night, and the monsters are ready to party! Join banshees, zombies, witches, and vampires as they dance, scream, and feast on gooey cobweb cake under the midnight moon. From jiving skeletons to sleepy werewolves, every monster brings their own magic to this frightfully fun bash.<br /><br />
          Will you dare to join the Monster’s Halloween Party? Turn the pages to find out!
        </p>
        <div className="mt-4">
          <p className="text-lg">Copyright 2024</p>
          <p className="text-lg">ISBN: 9798339360506</p>
        </div>
      </div>
    ),
    image: bonus,
  },
];