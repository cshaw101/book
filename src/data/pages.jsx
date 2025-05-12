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

export const pages = [
  {
    content: (
      <div className="page-content w-full h-full flex items-center justify-center text-center text-4xl font-chewy text-white">
        By Page Hill
      </div>
    ),
    image: cover,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl">The Monster's Halloween Party</h1>
        <p className="mt-4 italic text-2xl">To my baby niece! I love you so much!</p>
        <p className="mt-8 border-b-2 border-gray-400 w-1/2 mx-auto"></p>
      </div>
    ),
    image: dedication,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl">The Monster's Halloween Party</h1>
        <p className="mt-4 italic text-2xl">
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
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's Midnight! It's Halloween!</p>
        <p className="text-2xl">The banshee is so excited-</p>
        <p className="text-3xl font-bold">HE SCREAMS</p>
      </div>
    ),
   image: banshees,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's 1!</p>
        <p className="text-2xl">The zombies climb from the dirt for fun!</p>
      </div>
    ),
    image: zombies1,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's 2!</p>
        <p className="text-2xl">The witches bring a pot of bubbling brew!</p>
      </div>
    ),
    image: witch1,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">The skeletons play music on their knees!</p>
      </div>
    ),
    image: skeletons1,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">The ghosts glide to the dance floor.</p>
      </div>
    ),
    image: ghosts,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">The monsters start to jive!</p>
      </div>
    ),
    image: jiving,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's 6!</p>
        <p className="text-2xl">The goblins play a trick!</p>
      </div>
    ),
    image: goblins,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's 7!</p>
        <p className="text-2xl">Thunder crashes from the Heavens!</p>
      </div>
    ),
    image: storm2,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">The vampires cut the cobweb cake!</p>
        <p className="text-2xl">"Gooey red velvet, my favorite!"</p>
      </div>
    ),
    image: vampires,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's 9!</p>
        <p className="text-2xl">The werewolves are ready to dine!</p>
        <p className="text-2xl">"Hello, 9.927 bug pizzas and 11.883 jugs of pumpkin juice please!"</p>
      </div>
    ),
    image: werewolves,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">The monsters want to dance again!</p>
      </div>
    ),
    image: dancing1,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold">HAPPY HALLOWEEN</h1>
      </div>
    ),
    image: ending,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">"Is anyone else getting sleepy?"</p>
      </div>
    ),
    image: gettingtired,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">It's the Afternoon!</p>
        <p className="text-2xl">The monsters fall asleep so soon!</p>
      </div>
    ),
    image: readyforbed,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <p className="text-2xl">Goodnight Monsters!</p>
        <p className="text-3xl font-bold">Happy Halloween!</p>
      </div>
    ),
    image: sleepingMonsters,
  },
  {
    content: (
      <div className="page-content w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl">Create Your Own Halloween Story!</h1>
        <p className="mt-4 text-2xl">Write your own spooky tale below:</p>
        <div className="mt-4 w-3/4 h-1/2 border-2 border-gray-400 flex flex-col justify-end p-4">
          <p className="text-xl">Copyright 2024</p>
          <p className="text-xl">ISBN: 9798339360506</p>
        </div>
      </div>
    ),
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];