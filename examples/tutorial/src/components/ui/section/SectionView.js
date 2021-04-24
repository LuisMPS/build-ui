import {DnDBuilder, useEditor} from 'build-ui'
import Section from './Section';

const SectionView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id,
    });
    const {
        handleDrop,
    } = editor;
    return <DnDBuilder
        onDrop = {handleDrop}
    >
        <Section {...props} />
    </DnDBuilder>
}

export default SectionView;