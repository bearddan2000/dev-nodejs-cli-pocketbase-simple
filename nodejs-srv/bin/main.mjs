import Pocketbase from "pocketbase";

const pb = new Pocketbase("db");

let main = async () => {
    // const pb = getPb();
    try {
      await pb.collection("dog").create({
        breed: 'dog1',
        color: 'white',
      });
      console.log('complete');
    } catch(e) {
        console.log('error');
    }
};