// next
import Head from 'next/head';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// import { TreeView, TreeItem, treeItemClasses } from '@mui/lab';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// layouts
import MainLayout from '../../../layouts/main';
// components
import Iconify from '../../../components/iconify';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections
import { Block } from '../../../sections/_examples/Block';

// ----------------------------------------------------------------------

// const StyledTreeView = styled(TreeView)({
//   height: 240,
//   flexGrow: 1,
//   maxWidth: 400,
// });

// const StyledTreeItem = styled((props) => <TreeItem {...props} />)(({ theme }) => ({
//   [`& .${treeItemClasses.iconContainer}`]: {
//     '& .close': {
//       opacity: 0.3,
//     },
//   },
//   [`& .${treeItemClasses.group}`]: {
//     marginLeft: 15,
//     paddingLeft: 18,
//     borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
//   },
// }));

// ----------------------------------------------------------------------

MUITreesViewPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MUITreesViewPage() {
  return (
    <>
      <Head>
        <title> MUI Components: Tree View | Minimal UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Tree View"
            links={[
              {
                name: 'Components',
                href: PATH_PAGE.components,
              },
              { name: 'Tree View' },
            ]}
            moreLink={['https://mui.com/components/tree-view']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
            
      </Container>
    </>
  );
}
