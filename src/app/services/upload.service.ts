import { Injectable } from '@angular/core';
import { GLOBAL } from './global';

@Injectable()
export class UploadService {
	public url: string;
	constructor() {
		this.url = GLOBAL.url;
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>, token: string, name: string) {
		return new Promise(function (resolve, reject) {
			const formData: any = new FormData();
			const xhr = new XMLHttpRequest();

			for (let i = 0; i < files.length; i++) {
				formData.append(name, files[i], files[i].name);
			}
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					// tslint:disable-next-line:indent
					if (xhr.status === 200) { resolve(JSON.parse(xhr.response)); } else {
						reject(xhr.response);
					}
				}
			};

			xhr.open('POST', url, true);
			xhr.setRequestHeader('Authorization', token);
			xhr.send(formData);
		});
	}
}
