<template>
  <table>
    <thead>
      <tr>
        <th>Week</th>
        <th>Class Time</th>
        <th>Homework</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Introduction, Google Classroom setup, make sure everyone can log in and comment.</td>
        <td>
          Write and turn in: Quick introduction about yourself, what you know about computers, what questions you have about technology.<br />
          ★ Research one career in computing that interests you; write a paragraph on what that person does and what education the job
          typically requires.
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Binary numbers, counting in different bases, low-level computer storage.</td>
        <td>
          Encoding and decoding exercises - by hand and with tools.<br />
          ★ Encode and decode a message for your neighbor.
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Computer system overview - hardware and software, computer parts and operating systems</td>
        <td>
          Go through your operating system settings, find 5 things you never noticed before, write them in a comment when you turn in your
          homework.<br />
          ★ Look at your PC's specs, perform tasks while watching the task manager, and estimate what the most-limiting factor of your
          computer is.
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>How the internet works</td>
        <td>
          Draw a diagram with at least 5 steps showing how a webpage travels from a server to your screen.<br />
          ★ Use traceroute on a website. Identify 3 of the hops and look up where each is physically located.
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Write your first web page from scratch</td>
        <td>
          Build an HTML page about yourself or a hobby. Must include at least 2 paragraphs, a working link, and an image.<br />
          ★ Add a 2nd page and link the two together.
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Cybersecurity</td>
        <td>
          Evaluate your own login habits honestly. Write a personal cybersecurity plan with at least 3 specific improvements you will make
          and why.<br />
          ★ Explain HTTPS certificates; what happens when one expires? How do we keep them from expiring?
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>Google Workspace (Office software). Introduction to Google Drive, Docs, Slides, and Sheets; uses and similarities.</td>
        <td>
          Make a short presentation (using Google Slides) about the Google Workspace.<br />
          ★ In your presentation, compare it with Microsoft Office.
        </td>
      </tr>
      <tr>
        <td>8</td>
        <td>Data & Analysis with Google Sheets using basic spreadsheet formulas</td>
        <td>
          Track the weather this week - lows and highs. Create 2 different types of charts from the data.<br />
          ★ Add a formula (like AVERAGEIF) that flags days above/below the week's average automatically, or add conditional formatting to
          highlight them.
        </td>
      </tr>
      <tr>
        <td>9</td>
        <td>3D modeling with Tinkercad</td>
        <td>Design something 3D-printable in Tinkercad - must be original, consider creating a Christmas gift.</td>
      </tr>
      <tr>
        <td>10</td>
        <td>3D modeling design review</td>
        <td>Design review: make corrections, submit for final score, request print.</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Programming in Python: Intro, making your first program</td>
        <td>
          Showcase a simple "Hello, your-name" program.<br />
          ★ Expand the program to ask more questions and provide more responses.
        </td>
      </tr>
      <tr>
        <td colspan="3">Election Week</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Programming in Python: Flow control with conditionals and loops</td>
        <td>
          Make a simple guessing game - "too high" and "too low."<br />
          ★ Make it fancy (count attempts, etc.)
        </td>
      </tr>
      <tr>
        <td>13</td>
        <td>Programming in Python: Thinking in code</td>
        <td>
          Code project: Let's Make a Deal! Prove the Monty Hall problem.<br />
          ★ Run the simulation 100,000 times (both switch and stay). Report your results.
        </td>
      </tr>
      <tr>
        <td colspan="3">Holiday break November 21-January 2</td>
      </tr>
      <tr>
        <td>14</td>
        <td>Programming in Python: Functions</td>
        <td>
          Rewrite Let's Make a Deal with at least two well-commented functions.<br />
          ★ Rewrite the simple "Hello" app in functions, also.
        </td>
      </tr>
      <tr>
        <td>15</td>
        <td>Programming in Python: Data collections: lists and dictionaries</td>
        <td>
          Add an array of 1000 random numbers together.<br />
          ★ Also report: the highest, lowest, and average score.
        </td>
      </tr>
      <tr>
        <td>16</td>
        <td>Bug hunting game (flex week).</td>
        <td>Typing practice - 4 hours.</td>
      </tr>
      <tr>
        <td>17</td>
        <td>Databases: SQLite Introduction</td>
        <td>
          Install DB Browser for SQLite. Create a Students table with names from this class, populate the data, and "select * from Students"
          to prove it works.<br />
          ★ Add an order by clause to sort the records
        </td>
      </tr>
      <tr>
        <td>18</td>
        <td>Databases: Real data analysis: import historic weather data from meteostat,</td>
        <td>
          Using the weather data, find the hottest day and average temperature.<br />
          ★ Get the average temperature by month.
        </td>
      </tr>
      <tr>
        <td>19</td>
        <td>Databases: Advanced queries: joins, groupings, aggregates</td>
        <td>
          Compare and contrast weather from different stations - Summerville vs Charleston, for example.<br />
          ★ Import NOAA's HURDAT2 hurricane data into a second table and join it against your weather data by date. Note the differences in
          temperature and precipitation.
        </td>
      </tr>
      <tr>
        <td colspan="3">Winter break</td>
      </tr>
      <tr>
        <td>20</td>
        <td>AI: definition, understanding.</td>
        <td>
          Install LM Studio, and allow it to install the default LLM (probably gemma-4; consider e2b instead of e4b to save space). This
          requires about 8 GB storage in total, so make room if you have to!<br />
          ★ Come back with questions that AI cannot answer correctly (like how many "r"s in "strawberry").
        </td>
      </tr>
      <tr>
        <td>21</td>
        <td>AI: Running locally and Frontier models</td>
        <td>
          Write a short paper on the difference between a local LLM vs a large public one: differences, tradeoffs, etc.<br />
          ★ Include how you think AI is profitable for these companies.
        </td>
      </tr>
      <tr>
        <td>22</td>
        <td>AI: Ethics</td>
        <td>
          Write a personal AI use policy for your schoolwork. Be specific about what you will and will not do.<br />
          ★ Research how 3 different schools (including colleges) handle AI usage. Summarize the different approaches and explain which is
          best in your opinion.
        </td>
      </tr>
      <tr>
        <td>23</td>
        <td>Impacts of computing: How computers changed the world.</td>
        <td>
          The and now: Interview an adult who remembers the world before computers Ask them what it was like, take notes, and write a short
          paper (1-3 paragraphs).<br />
          ★ Research and find something computers were supposed to fix but actually made thing harder; write a paragraph.
        </td>
      </tr>
      <tr>
        <td>24</td>
        <td>Impacts of computing: Career study, digital permanence, safety, law, ethics.</td>
        <td>
          Search for your name and/or email online and write a reflection on how a college or employer would react to what they found. Is
          there anything that needs to change?<br />
          ★ Research a CS career path that interests you: what is the actual work like, what skills are needed, how much money do they make,
          and how could you get into that.
        </td>
      </tr>
      <tr>
        <td colspan="3">Spring Break</td>
      </tr>
      <tr>
        <td>25</td>
        <td>Data + Programming: Algorithmic thinking: dictionaries & indexes vs lists & lookups.</td>
        <td>
          Time a program that looks up items from very large datasets. Repeat multiple times to take an average.<br />
          ★ Change the data set size and number of search parameters by a small amount to see which has the greater effect.
        </td>
      </tr>
      <tr>
        <td>26</td>
        <td>Final Project: pick groups, pick a project, start planning</td>
        <td>Choose from a list of projects with teams of 2-3. Tell me your team and project.</td>
      </tr>
      <tr>
        <td>27</td>
        <td>Final Project working session</td>
        <td></td>
      </tr>
      <tr>
        <td>28</td>
        <td>Final Project working session</td>
        <td></td>
      </tr>
      <tr>
        <td>29</td>
        <td>Final Project Presentation: slideshows & project presentations</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
