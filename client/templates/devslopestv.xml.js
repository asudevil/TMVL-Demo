/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A list template shows a list of items on the right, such as movies or TV shows. Focus on one to see its related content on the left, such as its artwork or description.

This variation of the list templates uses a banner element to display a large image at the top of the page.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <listTemplate>
      <background>
        <img src="${this.BASEURL}resources/spicybackground.jpg" />
      </background>
    <list>
      <section>
        <header>
          <title>Spicy Suya!!</title>
        </header>
        <listItemLockup vidUrl="https://s3.amazonaws.com/spicysuya/Oakland_Video.mp4">
          <title>Fun in Oakland!!</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/OaklandFestival.jpg" width="857" height="482" />
              <title>Fun in Oakland!</title>
              <subtitle>Oakland African Festival</subtitle>
              <description>A great event in Oakland featuring great music, dancing, food, vendors, and other fun stuff!!</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup>
          <title>Bouqui!!</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/bouqui.jpg" width="857" height="482" />
              <title>Bouqui Promotional movie</title>
              <subtitle>Bouqui's movie</subtitle>
              <description>Bouqui is a fantastic artist.  This is a tv serious about her experience in the united states as an African artist trying to make it in the united states.  Alot of African Diaspora can relate to this movie. </description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup>
          <title>Title 3</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/spicysuyabanner.png" width="857" height="482" />
              <title>Related Title 3</title>
              <subtitle>Related Subtitle 3</subtitle>
              <description>Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
