# Saffron for Joy

A beautiful Jekyll-based website for sharing saffron recipes, wellness content, and building a community around the world's most precious spice.

## Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler (`gem install bundler`)
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saffron4Joy/Website-S4J.git
   cd Website-S4J
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site:**
   Open `http://localhost:4000` in your browser

---

## Deploying to GitHub Pages

### Step 1: Push to GitHub

```bash
# If starting fresh, initialize git
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Saffron for Joy website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Saffron4Joy/Website-S4J.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Saffron4Joy/Website-S4J`
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select the **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait a few minutes for the site to build

Your site will be available at: `https://saffron4joy.github.io/Website-S4J/`

### Step 3: Connect Your Custom Domain

1. In GitHub repository Settings > Pages, enter your custom domain: `saffronforjoy.com`
2. At your domain registrar, add these DNS records:

   **For apex domain (saffronforjoy.com):**
   ```
   Type: A
   Name: @
   Values:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: saffron4joy.github.io
   ```

3. Wait for DNS propagation (can take up to 48 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

---

## Content Management (Decap CMS)

### Setting Up Decap CMS

1. **Enable GitHub OAuth:**
   - Go to GitHub Settings > Developer Settings > OAuth Apps
   - Create a new OAuth app:
     - Application name: `Saffron for Joy CMS`
     - Homepage URL: `https://saffronforjoy.com`
     - Authorization callback URL: `https://api.netlify.com/auth/done`

2. **Set up Netlify Identity (for authentication):**
   - Create a free Netlify account
   - Connect your GitHub repository
   - Enable Identity in Netlify dashboard
   - Enable Git Gateway
   - Invite yourself as a user

3. **Access the CMS:**
   - Go to `https://saffronforjoy.com/admin/`
   - Log in with your Netlify Identity credentials
   - Start creating and editing content!

### Using the CMS

The CMS allows you to:
- **Create/Edit Blog Posts:** Write articles with a visual editor
- **Manage Recipes:** Add new recipes with ingredients, instructions, and images
- **Edit Pages:** Update About, How It Works, and other pages
- **Upload Images:** Drag and drop images directly

---

## Adding Content Manually

### Creating a New Blog Post

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title-slug.md`

2. Add front matter:
   ```yaml
   ---
   title: "Your Post Title"
   date: 2025-01-20
   categories: [Wellness, Recipes]
   tags: [saffron, health]
   image: /assets/images/blog/your-image.jpg
   description: "A brief description for SEO"
   author: Saffron for Joy
   read_time: 5
   ---

   Your content here...
   ```

### Creating a New Recipe

1. Create a new file in `_recipes/` with the format: `recipe-name.md`

2. Add front matter:
   ```yaml
   ---
   title: "Recipe Title"
   description: "Brief description"
   category: Main
   image: /assets/images/recipes/your-image.jpg
   featured: true
   prep_time: 15
   cook_time: 30
   servings: 4
   difficulty: Easy

   ingredients:
     - 1 cup ingredient one
     - 2 tablespoons ingredient two

   instructions:
     - "First step of the recipe"
     - "Second step of the recipe"

   tips:
     - "Helpful tip one"
     - "Helpful tip two"

   nutrition:
     calories: "250 kcal"
     protein: "10g"
     carbs: "30g"
     fat: "8g"
   ---

   Additional notes or story about the recipe...
   ```

### Adding Images

1. Place images in the appropriate folder:
   - Blog images: `assets/images/blog/`
   - Recipe images: `assets/images/recipes/`
   - General images: `assets/images/`

2. Reference in your content:
   ```yaml
   image: /assets/images/recipes/my-recipe.jpg
   ```

   Or in markdown:
   ```markdown
   ![Alt text](/assets/images/blog/my-image.jpg)
   ```

---

## Setting Up Forms

### Formspree Setup

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like `xrgwkqnv`)
4. Update `_config.yml`:
   ```yaml
   formspree_id: "your-form-id-here"
   ```

---

## Project Structure

```
saffron-for-joy/
├── _config.yml          # Jekyll configuration
├── _data/               # Site data files
│   └── settings.yml     # General settings
├── _includes/           # Reusable components
│   ├── header.html
│   ├── footer.html
│   ├── recipe-card.html
│   └── ...
├── _layouts/            # Page templates
│   ├── default.html
│   ├── post.html
│   ├── recipe.html
│   └── ...
├── _posts/              # Blog posts
├── _recipes/            # Recipe collection
├── admin/               # Decap CMS
│   ├── index.html
│   └── config.yml
├── assets/
│   ├── css/main.css     # Styles
│   ├── js/main.js       # JavaScript
│   └── images/          # Images
├── pages/               # Static pages
└── index.html           # Homepage
```

---

## Customization

### Colors

Edit the CSS variables in `assets/css/main.css`:

```css
:root {
  --color-saffron: #D4752E;
  --color-gold: #C9A227;
  --color-crimson: #A23B2D;
  /* ... more colors */
}
```

### Typography

The site uses:
- **Headings:** Cormorant Garamond
- **Body:** Montserrat

Change in `_layouts/default.html` Google Fonts link and in CSS.

### Logo

Replace `assets/images/logo.jpg` with your own logo file.

---

## Troubleshooting

### Site not building?
- Check for syntax errors in YAML front matter
- Ensure all required fields are present
- Run `bundle exec jekyll build --verbose` for detailed errors

### Images not showing?
- Verify file paths start with `/assets/images/`
- Check that image files exist in the correct folder
- Ensure filenames match exactly (case-sensitive)

### CMS not working?
- Verify GitHub OAuth is configured correctly
- Check Netlify Identity is enabled
- Ensure Git Gateway is enabled in Netlify

---

## Support

For questions or issues:
- Create an issue on GitHub
- Contact: hello@saffronforjoy.com

---

## License

Content is copyright Saffron for Joy. The website structure and code may be used as inspiration for personal projects.
