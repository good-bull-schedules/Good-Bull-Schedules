# Good-Bull-Schedules
Open-source scheduling server for Texas A&amp;M University students, written using:

- Django for running the webserver
- Redis for caching and improving overall response times for the data API.
- PostgreSQL for storing data.
- Elasticsearch for high-performance full-text searching.

## Goals

- Create an open, no-auth-needed API for students to analyze TAMU course/section data without having to create their own scrapers.
- Create an intuitive, content-based search interface that allows students to search courses based on the content they cover, not just keyword matching.
- Provide a readable, modular, and extensible (in order of priority) backend server for helping students make their schedules.


## Setting Up

To run Good-Bull-Schedules, you'll need to have [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

To set up the application:

0. **NOTE**: Elasticsearch requires more memory to run than most Docker setups will allow by default. To provide Elasticsearch with enough memory, please see [this](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#docker-cli-run-prod-mode) link, and follow the instructions for your appropriate platform.
1. `docker-compose up --build` will start the cluster. However, there won't be data present. Here's how to populate the data:

### Option 1 (More manual, all systems guaranteed)

2. `docker exec -it good-bull-schedules /bin/bash` will allow you to interact with the container
3. To populate the database, you'll need to run the following commands inside of the `good-bull-schedules` container:
    1. `python3 manage.py scrape_courses --settings=goodbullschedules.settings.docker` will scrape course information (approximately 5 minutes)
    2. `python3 manage.py scrape_sections --settings=goodbullschedules.settings.docker` will scrape all section data from 2009 to present. This takes a long time (4-5 hrs).
    3. `python3 manage.py scrape_grades --settings=goodbullschedules.settings.docker` will download, parse, and store grade distributions for all sections. (roughly 30 minutes)
    4. Lastly, to build the search index, run `python3 manage.py search_index --rebuild --settings=goodbullschedules.settings.docker`.

### Option 2 (More automatic, only tested on Unix systems, but probably can be done in PowerShell/WSL)

2. Run `./scrape_data.sh`.

You should be good to go now! Unless there are significant database changes, you shouldn't have to re-run the above scripts again. Navigate to `localhost:8000`, and go nuts!


## Contributing
We'd love to have you contribute! We want to encourage all kinds of developers (inexperienced and experienced) to contribute to this project, to make it the best that it can be.
