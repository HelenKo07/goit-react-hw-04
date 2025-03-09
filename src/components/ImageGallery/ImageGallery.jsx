import css from './ImageGallery.module.css';

export default function ImageGallery({items}) {
    return (
    <ul>
	{pictures.map(({objectID, picture, text}) => (
	<li key={objectID}>
		<div>
		  <img src={picture} alt={text} />
		</div>
	</li>	
	))}
</ul>
);
}

