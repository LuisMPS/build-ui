import {DnDListener} from "build-ui"

const DnDLayers = props => {
    return <DnDListener
        {...props}
        listenTransferType = 'layers'
    />
}

export default DnDLayers;