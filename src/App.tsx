import {Layout} from 'components/layout/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedView from 'view/FeedView';
import LoginView from 'view/LoginView';
import NotFoundView from 'view/NotFound';
import PostsView from 'view/PostsView';
import SinglePostView from 'view/SinglePostView';
import UserProfileView from 'view/UserProfileView';
import 'services/i18n/i18n';
import {getEnv} from 'utils/env';
import {AuthVerification} from 'components/auth';

function App() {
    const userId = getEnv('REACT_APP_USER_ID');

    return (
        <Router>
            {!!userId && <AuthVerification userId={userId} />}
            <Layout>
                <Routes>
                    <Route index element={<FeedView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/users/:userId" element={<UserProfileView />} />
                    <Route path="/posts" element={<PostsView />} />
                    <Route path="/posts/:postId" element={<SinglePostView />} />
                    <Route path="*" element={<NotFoundView />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
