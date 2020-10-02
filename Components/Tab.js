import React from "react";
import { FlatList, View, Text } from "react-native";
import Constants from "expo-constants";
// Import getNews function from news.js
import { getNews } from "../config/news";
// We'll get to this one later
import Article from "./Article";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then((articles) => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <React.Fragment>
        <View style={{ backgroundColor: "#000" }}>
          <View
            style={{
              alignSelf: "center",
              marginTop: Constants.statusBarHeight + 20,
              borderWidth: 2,
              borderRadius: 8,
              borderColor: "#fff",
            }}
          >
            <Text style={{ fontSize: 30, color: "#fff" }}>General</Text>
          </View>
          <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={(item) => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
            style={{ marginTop: 20 }}
          />
        </View>
      </React.Fragment>
    );
  }
}
