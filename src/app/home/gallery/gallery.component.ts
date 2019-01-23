import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
	public albums: Array<IAlbum>;
	private _subscription: Subscription;
  constructor(
		private _lightbox: Lightbox,
		private _lightboxEvent: LightboxEvent,
		private _lighboxConfig: LightboxConfig,
	) {
		this.albums = [];
		for (let i = 1; i <= 6; i++) {
				let src = "assets/img/gallery/" + i + ".jpg";
				const caption = "Gallery Image " + i;
				const thumb = "assets/img/gallery/" + i + ".jpg";
				const album = {
						src: src,
						caption: caption,
						thumb: thumb
				};

				this.albums.push(album);
		}

		// set default config
		this._lighboxConfig.fadeDuration = 1;
	}
	
	//ngx-lightbox methods
	open(index: number): void {
			this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(
					(event: IEvent) => this._onReceivedEvent(event)
			);

			// override the default config
			this._lightbox.open(this.albums, index, {
					wrapAround: true,
					showImageNumberLabel: true
			});
	}
	//ngx-lightbox methods
	private _onReceivedEvent(event: IEvent): void {
			if (event.id === LIGHTBOX_EVENT.CLOSE) {
					this._subscription.unsubscribe();
			}
	}

  ngOnInit() {
	}
	
	ngAfterViewInit(): void {
		
	}

}
