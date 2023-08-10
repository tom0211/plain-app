package com.ismartcoding.plain

import com.ismartcoding.lib.helpers.CryptoHelper

object TempData {
    var webEnabled = false
    var demoMode = false
    var selectedBoxId = ""
    var endictShowWord = true
    var endictShowTranslation = true
    var clientId = ""
    var keyStorePassword = ""
    val fileIdToken = CryptoHelper.generateAESKey() // use to generate file path to id or decrypt file id to path
}