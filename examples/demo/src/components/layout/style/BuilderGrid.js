import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles/combine';
import {topbarStyles} from './TopBar';
import {sidebarStyles} from './SideBar';
import {workspaceStyles} from './Workspace';

export const gridStyles = theme => ({
    grid: ({

    }),
    topGrid: ({
        // position: 'sticky',
        // top: '0px'
    }),
    workAndSideGrid: ({
        [theme.breakpoints.up('md')]: ({
            height: 600
        }),
    }),
    workGrid: ({
        [theme.breakpoints.up('md')]: ({
            height: '100%'
        }),
    }),
    sideGrid: ({
        [theme.breakpoints.up('md')]: ({
            height: '100%'
        }),
    })
})

const useStyle = makeStyles(combineStyles(
    gridStyles,
    topbarStyles,
    workspaceStyles,
    sidebarStyles
));

export default useStyle;