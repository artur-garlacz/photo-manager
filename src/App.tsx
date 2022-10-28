import {Layout} from 'components/layout/Layout';
import {useLoginUser} from 'hooks/loginUser';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import FeedView from 'view/FeedView';
import LoginView from 'view/LoginView';
import NotFoundView from 'view/NotFound';
import PostsView from 'view/PostsView';
import SinglePostView from 'view/SinglePostView';
import UserProfileView from 'view/UserProfileView';
import 'services/i18n/i18n';

function App() {
    useLoginUser();
    return (
        <Router>
            <Routes>
                <Route
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route index element={<FeedView />} />

                    <Route path="/login" element={<LoginView />} />
                    <Route path="/users/:userId" element={<UserProfileView />} />
                    <Route path="/posts" element={<PostsView />} />
                    <Route path="/posts/:postId" element={<SinglePostView />} />
                    <Route path="*" element={<NotFoundView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
