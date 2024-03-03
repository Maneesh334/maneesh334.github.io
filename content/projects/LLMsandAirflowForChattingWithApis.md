---
date: '2023-12-27'
title: 'LLM-Powered Chat Application for APIs using Kafka and Spark'
github: ''
external: ''
tech:
  - Kafka
  - Spark
  - Airflow
  - SQL
  - PostgresQL
  - Python
  - Streamlit
  - LangChain
  - GPT-3.5
company: ''
showInProjects: true
---

• Built a GPT-powered application to interact with and extract information from SQL databases.

• Web app built using the streamlit framework. LangChain’s React SQL Agentused to interact with the SQL
database.

• Data is streamed from API to Kafka topic. Data consumed from Kafka topic, processed and transferred to
PostgreSQL database by Spark job. Apache Airflow used for handling execution of streaming and processing