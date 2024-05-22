package utils

import (
    "log"
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "backend/models"
)

var DB *gorm.DB

func ConnectDB() {
    var err error
    DB, err = gorm.Open(sqlite.Open("services.db"), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    DB.AutoMigrate(&models.Service{})
}
