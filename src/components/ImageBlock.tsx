import { type IImageBlockProp } from '../interfaces';

const ImageBlock = ({ imageUrl, altText, imageClass }: IImageBlockProp) => {
  const lastUnderscoreIndex = imageUrl.lastIndexOf('_');
  const filePath = imageUrl.slice(0, lastUnderscoreIndex).toLowerCase();
  const fileName = filePath.split('/');
  // NOTE: as I did not have images for every exercise added this to use a generic image for any in the noImageList
  const noImageList = [
    'dumbell_fly',
    'shoulder_press',
    'tricep_extention',
    'chin_up',
    'calf_raise',
    'lunges',
    'step_up',
    'hamstrings',
    'russian_twists',
    'leg_raises',
    'side_plank',
    'reverse_crunches',
    'lat_pulldowns',
    'bent_over_rows',
    'good_mornings',
    'supermans',
    'seated_cable_rows',
    't_bar_rows',
    'bicycle_crunches',
    'hip_thrust',
    'sit_ups',
  ];
  const imageNotFound = noImageList.includes(fileName[fileName.length - 1]);

  return (
    <picture>
      {imageNotFound && (
        <img
          loading='lazy'
          src='/src/assets/images/no_image_found.jpeg'
          alt={altText}
          className={imageClass}
        />
      )}
      {!imageNotFound && (
        <>
          <source
            srcSet={`${imageUrl.slice(0, lastUnderscoreIndex)}_d.webp`}
            type='image/webp'
            media='(min-width: 600px)'
          />
          <source
            srcSet={`${imageUrl.slice(0, lastUnderscoreIndex)}_d.jpeg`}
            type='image/jpg'
            media='(min-width: 600px)'
          />
          <img
            loading='lazy'
            src={`${imageUrl}`}
            alt={altText}
            className={imageClass}
          />
        </>
      )}
    </picture>
  );
};

export { ImageBlock };
