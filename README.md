# Unlimited Medium Freedium

A Safari extension that automatically redirects Medium articles to Freedium, allowing you to read Medium articles without a subscription.

## Features

- Automatically detects Medium article URLs
- Instantly redirects to the Freedium version of the article
- Works with all Medium domains (medium.com and *.medium.com)
- No configuration needed - just install and it works!
- Redirects all Medium articles to Freedium, regardless of whether they are free or premium

## Installation

1. Clone this repository
2. Open the project in Xcode
3. Select the "macOS (App)" target
4. Build the project (⌘B)
5. Open Safari
6. Go to Safari > Settings > Extensions
7. Enable "Unlimited Medium Freedium"
8. Grant necessary permissions when prompted

## How it Works

The extension automatically redirects any Medium article URL to its Freedium counterpart. This includes both free and premium articles, ensuring a consistent reading experience without having to check if an article is behind a paywall.

### Article Detection
The extension only redirects actual article pages, identified by:
- URL pattern: `medium.com/@username/article-slug`
- Must contain an author handle (starting with @)
- Must have an article slug
- Homepage and other Medium pages are not redirected

## Development

This is a Safari Web Extension built using:
- Swift for native functionality
- JavaScript for web content handling
- Safari Extension API for browser integration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this extension useful, consider giving it a star on GitHub! 
