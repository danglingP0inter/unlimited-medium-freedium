# Unlimited Medium Freedium

A browser extension that automatically redirects Medium articles to Freedium, allowing you to read Medium articles without a paywall.

## Features

- Automatically redirects Medium articles to Freedium
- Tracks the number of articles you've read
- Simple and clean popup interface
- Dark mode support
- Toggle to enable/disable the extension

## URL Patterns

The extension recognizes and redirects the following Medium URL patterns:

### Redirected Patterns
- Author articles: `https://medium.com/@username/article-slug`
- Publication articles: `https://medium.com/publication-name/article-slug`
- Topic articles: `https://medium.com/topic/article-slug`

### Excluded Patterns (Not Redirected)
- User-specific pages: `https://medium.com/me/*`
- Story creation: `https://medium.com/new-story`
- Settings: `https://medium.com/settings`
- Any other non-article pages

> **Note**: This pattern set is not exhaustive. Medium may use additional URL patterns for articles that are not currently recognized. If you encounter a valid Medium article that isn't being redirected, please [file a bug report](https://github.com/danglingP0inter/unlimited-medium-freedium/issues) with the URL pattern so we can add support for it.

## Installation

1. Clone this repository
2. Open your browser's extension management page
3. Enable Developer mode
4. Click "Load unpacked" and select the extension directory

## Usage

1. Install the extension
2. Click the extension icon to open the popup
3. Use the toggle to enable/disable the extension
4. Visit any Medium article to automatically redirect to Freedium

## Demo

[▶️ View on GitHub Releases](https://github.com/danglingP0inter/unlimited-medium-freedium/releases/download/v1.0.0/extensionDemo.mov)

## Development

The extension is built using:
- HTML/CSS/JavaScript for the popup interface
- Browser extension APIs for functionality
- Chart.js for statistics visualization (currently disabled)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this extension useful, consider:
- Giving it a star on GitHub
- Supporting [Freedium](https://freedium.cfd) by donating to help maintain their service
- Sharing it with others who might benefit from it

## Acknowledgements

This extension wouldn't be possible without [Freedium](https://freedium.cfd), which provides the service to read Medium articles without a paywall. A big thank you to the Freedium team for making this possible! 
