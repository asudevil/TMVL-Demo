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
          <title style="background-color: rgba(240, 240, 240, 0.7); tv-text-style: title; font-size:48; font-weight:regular;">Featured Movies!!</title>
        </header>
        <listItemLockup vidUrl="https://s3.amazonaws.com/spicysuya/Oakland_Video.mp4">
          <title style="background-color: rgba(240, 240, 240, 0.5)"> Fun in Oakland!!</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/OaklandFestival.jpg" width="857" height="482" />
              <title>Fun in Oakland!</title>
              <subtitle style="background-color: rgb(254, 150, 0)">Oakland African Festival</subtitle>
              <description style="background-color: rgb(254, 150, 0)">A great event in Oakland featuring great music, dancing, food, vendors, and other fun stuff!!</description>
            </lockup>
          </relatedContent>
        </listItemLockup>


        <listItemLockup template="${this.BASEURL}/templates/Compilation.xml.js" presentation="modalDialogPresenter">
          <title style="background-color: rgba(240, 240, 240, 0.5)">Bouqui!!</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/bouqui.jpg" width="857" height="482" />
              <title>Bouqui Promotional movie</title>
              <subtitle style="background-color: rgb(254, 150, 0)">Bouqui's movie</subtitle>
              <description style="background-color: rgb(254, 150, 0)">Bouqui is a fantastic artist.  This is a tv serious about her experience in the united states as an African artist trying to make it in the united states.  Most of the African Diaspora population can relate to this movie. </description>
            </lockup>
          </relatedContent>
        </listItemLockup>


        <listItemLockup>
          <title style="background-color: rgba(240, 240, 240, 0.5)">Title 3</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/spicysuyabanner.png" width="857" height="482" />
              <title>Related Title 3</title>
              <subtitle style="background-color: rgb(254, 150, 0)">Related Subtitle 3</subtitle>
              <description style="background-color: rgb(254, 150, 0)">Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup>
          <title style="background-color: rgba(240, 240, 240, 0.5)">Title 4</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/spicysuyabanner.png" width="857" height="482" />
              <title>Related Title 4</title>
              <subtitle style="background-color: rgb(254, 150, 0)">Related Subtitle 3</subtitle>
              <description style="background-color: rgb(254, 150, 0)">Lorem ipsum Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Interdum at. Eget habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
