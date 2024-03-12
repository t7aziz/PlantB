package com.example.plantb_web

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebSettings
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView
import com.example.plantb_web.ui.theme.Plantb_webTheme

class MainActivity : ComponentActivity() {
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Plantb_webTheme {
                // Your theme's surface container
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    // Container for your WebView
                    WebViewContainer()
                }
            }
        }
    }
}

@Composable
fun WebViewContainer() {
    // Function to display WebView
    WebViewExample()
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun WebViewExample() {
    // Use AndroidView to embed the WebView
    AndroidView(
        modifier = Modifier.fillMaxSize(),
        factory = { context ->
            WebView(context).apply {
                settings.apply {
                    javaScriptEnabled = true  // Enable JavaScript

                    // Recommended additional settings
                    domStorageEnabled = true  // Enable DOM storage API
                    databaseEnabled = true  // Enable database storage API
                    cacheMode = WebSettings.LOAD_DEFAULT

                    // Enable debugging (for development purposes)
                    /*if (BuildConfig.DEBUG) {
                        WebView.setWebContentsDebuggingEnabled(true)
                    }*/
                }
                loadUrl("file:///android_asset/index.html")
            }
        }
    )
}
