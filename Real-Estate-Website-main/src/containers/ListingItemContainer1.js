import React from "react";

import { Listing } from "../components";

const ListingItemContainer1 = ({ featured, width }) => {
  console.log(featured.image1);
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image1} to/>
          
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
       <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Button>
            <Listing.Anchor to={`/rproperty/${featured.id}`}>
              Details
              
            </Listing.Anchor>
          </Listing.Button>
          <br></br><br></br>
        </Listing.BottomItem>
      </Listing.Bottom> 
    </Listing>
  );
};

export default ListingItemContainer1;
