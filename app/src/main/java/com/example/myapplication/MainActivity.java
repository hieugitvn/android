package com.example.myapplication;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.ViewTreeObserver;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;
public class MainActivity extends AppCompatActivity {
    private WebView webView;
    private SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Ánh xạ WebView từ layout
        webView = findViewById(R.id.webView);

        // Khởi tạo SharedPreferences
        sharedPreferences = getPreferences(MODE_PRIVATE);

        // Cấu hình WebView
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true); // Bật JavaScript (nếu cần)
        webSettings.setDomStorageEnabled(true); // Bật lưu trữ DOM (nếu cần)

        // Thiết lập WebViewClient để theo dõi sự kiện trang đã tải xong
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                // Khi trang đã tải xong, kiểm tra vị trí đã lưu và cuộn đến nó
                int scrollY = sharedPreferences.getInt("scrollY", 0);
                view.scrollTo(0, scrollY);
            }
        });

        // Lắng nghe sự kiện cuộn của WebView bằng cách sử dụng ViewTreeObserver
        webView.getViewTreeObserver().addOnScrollChangedListener(new ViewTreeObserver.OnScrollChangedListener() {
            @Override
            public void onScrollChanged() {
                // Lưu vị trí cuộn khi trang đang cuộn
                int scrollY = webView.getScrollY();
                SharedPreferences.Editor editor = sharedPreferences.edit();
                editor.putInt("scrollY", scrollY);
                editor.apply();
            }
        });

        // Load URL khi ứng dụng bắt đầu

        //  String urlToLoad = "https://www.nettruyenus.com/"; // Thay thế bằng URL của bạn
        //  webView.loadUrl(urlToLoad);
        String filePath = "file:///android_asset/index.html";
        webView.loadUrl(filePath);
    }
}
