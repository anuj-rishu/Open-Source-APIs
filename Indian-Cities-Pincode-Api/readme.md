# Indian Cities Pincode API 🇮🇳

A comprehensive REST API providing detailed information about Indian cities, states, and their corresponding pincodes. This API serves as a reliable source for location-based data across India.

## 🌟 Features

- **Complete Pincode Database**: Access to extensive pincode information across India
- **City & State Mapping**: Get detailed city and state information
- **Fast & Reliable**: Optimized for quick response times
- **JSON Responses**: Clean, structured JSON data format
- **No Authentication Required**: Free to use without API keys
- **CORS Enabled**: Ready for web applications

## 📚 API Endpoints

```

### Get All States
```http
GET /states
```

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "state_code": "AN",
      "state_name": "Andaman and Nicobar Islands"
    },
    {
      "state_code": "AP",
      "state_name": "Andhra Pradesh"
    }
  ]
}
```

### Get Cities by State
```http
GET /cities/{state_code}
```

**Parameters:**
- `state_code` (string): Two-letter state code (e.g., "MH", "DL", "TN")

**Example:**
```http
GET /cities/MH
```

**Response:**
```json
{
  "status": "success",
  "state": "Maharashtra",
  "data": [
    {
      "city_name": "Mumbai",
      "district": "Mumbai",
      "pincodes": ["400001", "400002", "400003"]
    },
    {
      "city_name": "Pune",
      "district": "Pune",
      "pincodes": ["411001", "411002", "411003"]
    }
  ]
}
```

### Get Pincode Details
```http
GET /pincode/{pincode}
```

**Parameters:**
- `pincode` (string): 6-digit Indian postal code

**Example:**
```http
GET /pincode/400001
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "pincode": "400001",
    "post_office": "Fort",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "state_code": "MH",
    "country": "India",
    "latitude": 18.9388,
    "longitude": 72.8354
  }
}
```
```http
GET /search?q={query}
```

**Parameters:**
- `q` (string): Search query for city names

**Example:**
```http
GET /search?q=Mumbai
```

**Response:**
```json
{
  "status": "success",
  "query": "Mumbai",
  "results": [
    {
      "city_name": "Mumbai",
      "state": "Maharashtra",
      "state_code": "MH",
      "district": "Mumbai",
      "pincode_count": 156
    }
  ]
}
```

### Get Pincodes by City
```http
GET /city/{city_name}/pincodes
```

**Parameters:**
- `city_name` (string): Name of the city

**Example:**
```http
GET /city/Delhi/pincodes
```

**Response:**
```json
{
  "status": "success",
  "city": "Delhi",
  "state": "Delhi",
  "data": [
    {
      "pincode": "110001",
      "area": "Connaught Place",
      "post_office": "Parliament Street"
    },
    {
      "pincode": "110002",
      "area": "Darya Ganj",
      "post_office": "Darya Ganj"
    }
  ]
}
```


## 📜 License


