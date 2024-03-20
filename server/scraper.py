import requests
from bs4 import BeautifulSoup

def scrape_data(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract the data you need from the parsed HTML
        # For example, find all <a> tags with class 'item-title'
        data = []
        for item in soup.find_all('a', class_='item-title'):
            data.append(item.text.strip())

        return data
    else:
        print('Failed to fetch page:', response.status_code)
        return None