// import * as React from "react";
import {TeamCard} from "../../components/AllCards/TeamCard";
import Data from "../../data/TriggeredCard.json";
import Intel from "../../data/EirPopUp.json";
import Info from "../../data/Advisory.json";

import {EightgeariansPopUpCard1} from "../../components/AllCards/TriggeredCards";
import {EightgeariansPopUpCard2} from "../../components/AllCards/TriggeredCards";
import {EightgeariansPopUpCard3} from "../../components/AllCards/TriggeredCards";
import {EightgeariansPopUpCard4} from "../../components/AllCards/TriggeredCards";
import {EightgeariansPopUpCard5} from "../../components/AllCards/TriggeredCards";
import {EightgeariansPopUpCard6} from "../../components/AllCards/TriggeredCards";

import {EIRDataPopUpCard1} from "../../components/AllCards/TriggeredCards";
import {EIRDataPopUpCard2} from "../../components/AllCards/TriggeredCards";
import {EIRDataPopUpCard3} from "../../components/AllCards/TriggeredCards";
import {EIRDataPopUpCard4} from "../../components/AllCards/TriggeredCards";
import {EIRDataPopUpCard5} from "../../components/AllCards/TriggeredCards";
import {EIRDataPopUpCard6} from "../../components/AllCards/TriggeredCards";

import {AdvisoryBoardOnHoverCard1} from "../../components/AllCards/TriggeredCards";
import {AdvisoryBoardOnHoverCard2} from "../../components/AllCards/TriggeredCards";
import {AdvisoryBoardOnHoverCard3} from "../../components/AllCards/TriggeredCards";
import {AdvisoryBoardOnHoverCard4} from "../../components/AllCards/TriggeredCards";
import {AdvisoryBoardOnHoverCard5} from "../../components/AllCards/TriggeredCards";
import {AdvisoryBoardOnHoverCard6} from "../../components/AllCards/TriggeredCards";
const TeamsPage = () => {
  return (
    <>
      <TeamCard></TeamCard>

      {Data.FirstTriggeredCardFile.map((firstTriggeredCardFile) => {
        return (
          <EightgeariansPopUpCard1 {...firstTriggeredCardFile} />
        )
      })}

{Data.SecondTriggeredCardFile.map((secondTriggeredCardFile) => {
        return (
          <EightgeariansPopUpCard2 {...secondTriggeredCardFile} />
        )
      })}

{Data.ThirdTriggeredCardFile.map((thirdTriggeredCardFile) => {
        return (
          <EightgeariansPopUpCard3 {...thirdTriggeredCardFile} />
        )
      })}

{Data.FourthTriggeredCardFile.map((fourthTriggeredCardFile) => {
        return (
          <EightgeariansPopUpCard4 {...fourthTriggeredCardFile} />
        )
      })}

{Data.FifthTriggeredCardFile.map((fifthTriggeredCardFile) => {
        return (
          <EightgeariansPopUpCard5 {...fifthTriggeredCardFile} />
        )
      })}

{Data.SixthTriggeredCardFile.map((sixthTriggeredCardFile) => {
        return (
          <EightgeariansPopUpCard6 {...sixthTriggeredCardFile} />
        )
      })}

{Intel.FirstEirPopUpFile.map((firstEirPopUpFile) => {
        return (
          <EIRDataPopUpCard1 {...firstEirPopUpFile} />
        )
      })}

{Intel.SecondEirPopUpFile.map((secondEirPopUpFile) => {
        return (
          <EIRDataPopUpCard2 {...secondEirPopUpFile} />
        )
      })}

{Intel.ThirdEirPopUpFile.map((ThirdEirPopUpFile) => {
        return (
          <EIRDataPopUpCard3 {...ThirdEirPopUpFile} />
        )
      })}

{Intel.FourthEirPopUpFile.map((fourthEirPopUpFile) => {
        return (
          <EIRDataPopUpCard4 {...fourthEirPopUpFile} />
        )
      })}

{Intel.FifthEirPopUpFile.map((fifthEirPopUpFile) => {
        return (
          <EIRDataPopUpCard5 {...fifthEirPopUpFile} />
        )
      })}

{Intel.SixthEirPopUpFile.map((sixthEirPopUpFile) => {
        return (
          <EIRDataPopUpCard6 {...sixthEirPopUpFile} />
        )
      })}

{Info.FirstHoverCard.map((firstHoverCard) => {
  return (
    <AdvisoryBoardOnHoverCard1 {...firstHoverCard}/>
  )
})}

{Info.SecondHoverCard.map((secondHoverCard) => {
  return (
    <AdvisoryBoardOnHoverCard2 {...secondHoverCard}/>
  )
})}

{Info.ThirdHoverCard.map((thirdHoverCard) => {
  return (
    <AdvisoryBoardOnHoverCard3 {...thirdHoverCard}/>
  )
})}

{Info.FourthHoverCard.map((fourthHoverCard) => {
  return (
    <AdvisoryBoardOnHoverCard4 {...fourthHoverCard}/>
  )
})}

{Info.FifthHoverCard.map((fifthHoverCard) => {
  return (
    <AdvisoryBoardOnHoverCard5 {...fifthHoverCard}/>
  )
})}

{Info.SixthHoverCard.map((sixthHoverCard) => {
  return (
    <AdvisoryBoardOnHoverCard6 {...sixthHoverCard}/>
  )
})}
    </>
  );
};

export default TeamsPage;
