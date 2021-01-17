 package com.example.envy_save;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }
}

File file = new File("Credits.html")
 
 try {
    Files.write(file.toPath(), content.getBytes());
    Desktop.getDesktop().browse(file.toURI());
} catch (IOException e) {
  // TODO Auto-generated catch block
}
