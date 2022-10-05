import {Layout} from 'components/layout/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedView from 'view/FeedView';
import LoginView from 'view/LoginView';
import NotFoundView from 'view/NotFound';
import PostsView from 'view/PostsView';
import SinglePostView from 'view/SinglePostView';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route index element={<FeedView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/posts" element={<PostsView />} />
                    <Route path="/posts/:postId" element={<SinglePostView />} />
                    <Route path="*" element={<NotFoundView />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
