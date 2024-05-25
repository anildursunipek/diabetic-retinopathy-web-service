import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // downloadImage(){
  //   const fileUrl = 'src/assets/dr-sample-fundus-images.rar';
  //   const fileName = 'dr-sample-fundus-images.rar';
  //   this.downloadFile(fileUrl, fileName);
  // }

  // downloadFile(url: string, fileName: string) {
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {}
  //   })
  //   .then(response => response.blob())
  //   .then(blob => {
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = fileName;
  //     document.body.appendChild(a);
  //     a.click();
  //     a.remove();
  //   })
  //   .catch(error => console.error('Error downloading the file:', error));
  // }
}
