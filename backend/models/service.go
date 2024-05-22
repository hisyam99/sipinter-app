package models

import "gorm.io/gorm"

type Service struct {
    gorm.Model
    Name        string `json:"name"`
    Description string `json:"description"`
    Location    string `json:"location"`
    Rating      float32 `json:"rating"`
}
