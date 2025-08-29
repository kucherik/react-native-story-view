import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ProgressiveImage from './ProgressiveImage';
import styles from './styles';
import { StoryViewProps, StroyTypes } from './types';

const StoryView = (props: StoryViewProps) => {
  const source = props?.stories?.[props?.progressIndex];
  // const videoRef = useRef(null);
  const isCurrentIndex = props?.index === props?.storyIndex;

  // useEffect(() => {
  //   if (props?.index === props?.storyIndex) {
  //     videoRef?.current?.seek(0);
  //   }
  // }, [props?.storyIndex, props?.index]);

  // const onLoadStart = () => {
  //   setLoading(true);
  // };
  //
  // const loadVideo = () => {
  //   if (isCurrentIndex) {
  //     if (videoData.current === undefined) return;
  //     setLoading(false);
  //     setBuffering(false);
  //     props?.onVideoLoaded?.(videoData.current);
  //   }
  // };
  //
  // const onBuffer = (data: any) => {
  //   setBuffering(data.isBuffering);
  // };

  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.divStory, { height, width }]} ref={props?.viewRef}>
      {source?.type === StroyTypes.Image ? (
        <ProgressiveImage
          viewStyle={props?.imageStyle ?? styles.imgStyle}
          imgSource={{ uri: source.url ?? '' }}
          thumbnailSource={{ uri: source.url ?? '' }}
          onImageLoaded={props.onImageLoaded}
        />
      ) : (
        isCurrentIndex && <></>
      )}
    </View>
  );
};

export default StoryView;
