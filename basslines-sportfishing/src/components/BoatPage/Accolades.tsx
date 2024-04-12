import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const CrewComponent: React.FC = () => {
  return (
    <>
      <div
        className="text-center mt-8 bg-blue-500 w-100 py-6"
        style={{ height: "100px" }}
      >
        <h1 className="text-3xl font-bold text-white mb-2  ">Meet Our Crew</h1>
      </div>
      <CardGroup className="bg-gray-200">
        <Card>
          <Card.Img
            variant="top"
            src="CaptWilly.jpg"
            style={{ maxHeight: "600px" }}
          />
          <Card.Body>
            <Card.Title>Captain Willy</Card.Title>
            <Card.Text>
              Willy's deep passion for fishing developed at a young age while
              fishing with his father at the Jersey shore. When he was 14 years
              old, Willy got his first job working as a mate. Since then, he has
              been fishing up and down the Jersey Coast. When Willy turned 18,
              he obtained his OUPV Captains license and began his journey
              captaining boats. Willy is a well rounded fisherman and enjoys
              targeting striped bass from the rivers to the ocean, as well as
              tuna both inshore and in the canyons. He also enjoys wreck fishing
              for bottom fish and tile fishing in the canyons. Willy's true
              passion is providing people with memorable days on the water, as
              he enjoys taking people fishing and growing the sport. Willy has
              fished in numerous tournaments along the East Coast such as the
              "White Marlin Open" and the "Jimmy Johnson's Quest for the Ring."
              In 2022, he took home first place in the small boat division as a
              mate on team End Game. Nowadays, Willy captains the charter boat
              "Basslines" with his father, Bill Abbott. Together they make a
              great team fishing inshore and offshore out of New Jersey while
              targeting many different species.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="CaptBill.jpg"
            style={{ maxHeight: "600px" }}
          />
          <Card.Body>
            <Card.Title>Captain Bill</Card.Title>
            <Card.Text>
              Captain Bill has been fishing this area since he was a kid, so he
              knows the location of all the best fishing spots along the coast
              of New Jersey. With that map memorized, you could almost say he
              doesn’t need GPS. Bill has an enormous amount of fishing wisdom
              under his belt and a passion for sharing it. From teaching the
              youngers how to cast, to helping anglers secure every fish they
              hook, Bill can and will do it all while smiling ear to ear.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="LucasMate.jpg"
            style={{ maxHeight: "600px" }}
          />
          <Card.Body>
            <Card.Title>First Mate Lucas</Card.Title>
            <Card.Text>
              Lucas has proven him self as a valuable mate and a client favorite
              on basslines since he first joined the team. His skills lie in his
              ability to teach customers proper techniques and ensure they have
              an memorable day on the water. Lucas always has a smile on his
              face and enjoys sharing his passion for fishing with anyone on
              board. Lucas is great with coaching any level of anglers and never
              fails to ensure everyone on board has a friendly and enjoyable
              experience on basslines!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="MateTrent.jpg"
            style={{ maxHeight: "600px" }}
          />
          <Card.Body>
            <Card.Title>First Mate Trent</Card.Title>
            <Card.Text>
              Trent has established himself as an indispensable first mate and a
              beloved figure among our clients here at Basslines. His journey
              began under the mentorship of the legendary Freddy Gamboa, where
              he honed his skills and gained invaluable insights into the
              intricacies of the charter business while mating on Andrea's Toy.
              Trent's dedication and passion for fishing shine through in every
              trip he leads. His friendly demeanor and infectious enthusiasm
              make him a favorite among anglers of all levels. Having mastered
              the art of coaching anglers and creating memorable experiences,
              Trent continues to uphold our commitment to providing exceptional
              service and ensuring that everyone on board enjoys a friendly and
              enjoyable time on Basslines.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default CrewComponent;
