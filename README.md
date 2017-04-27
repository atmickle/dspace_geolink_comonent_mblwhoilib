# dspace_geolink_comonent_mblwhoilib
The GeoLink component code used for the library's DSpace repository. 
This code is not specific to DSpace. You can use the same basic set up for any webpage.
This is the working code for our DSpace Repository GeoLink Component that searches for WHOI cruises in the subject tags. 
I am also working on a query for people. Feel free to copy this code and use in any way that is useful. 
This is far from perfect, so please don't put my javascript up on a large screen. I am not a professional coder and it is still a work in progress. 

Note that the original geolink component code is available here: <https://github.com/geocomponents/geocomponents.github.io>.
If you would like to submit some work, please let us know. 
You can also email me if you would like to know more about what's in the GeoLink Linked Open Data and how you can use it.
Audrey Mickle, Data Librarian, MBLWHOI Library - amickle@whoi.edu

Here are some examples of the component on the pages:
1. https://darchive.mblwhoilibrary.org/handle/1912/5215 (Fewer than three cruise legs)
2. https://darchive.mblwhoilibrary.org/handle/1912/5027 (More than 3 cruise legs)

## To Do List:
1. Create a loop that looks at all the cruises instead of just the first one/theme the results.
2. The goal is to get cruises into their own field that use cruise URIs, so the component will not need to filter by hardcoded text searches, but use cases will vary by site. 

## About GeoLink
A growing collection of standard protocols, formats, and vocabularies, often characterized as the Semantic Web, offers a powerful approach for publishing research data online. The GeoLink project brings together experts from the geosciences, computer science, and library science in an effort to develop Semantic Web components that support discovery and reuse of data and knowledge. GeoLink's participating repositories include content from field expeditions, laboratory analyses, journal publications, conference presentations, theses/reports, and funding awards that span scientific studies from marine geology to marine ecosystems and biogeochemistry to paleoclimatology. 

Outcomes will include a set of reusable ontology design patterns (ODPs) that describe core geoscience concepts, a network of Linked Data published by participating repositories using those ODPs, and tools to facilitate discovery of related content in multiple repositories. Our work is aligned with other EarthCube efforts including EarthCollab, CINERGI, and the Council of Data Facilities.
<http://www.geolink.org/index.html>

