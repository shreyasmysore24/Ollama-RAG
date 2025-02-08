import requests

response = requests.get("https://brainlox.com/courses/category/technical")
print(f"Status Code: {response.status_code}")  # Should be 200
print(f"Content Length: {len(response.text)}")  # Should be > 0